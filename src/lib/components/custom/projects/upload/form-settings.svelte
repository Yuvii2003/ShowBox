<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { projectUpload, type ProjectUpload } from '$lib/client/schema';
	import {
		type SuperValidated,
		type Infer,
		superForm,
		filesProxy,
		fileProxy
	} from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { parseFile, filterIgnoredFiles } from '$lib/utils';
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';

	let { data }: { data: { form: SuperValidated<Infer<ProjectUpload>> } } = $props();
	const form = superForm(data.form, {
		validators: zodClient(projectUpload),
		onUpdated: (e) => {
			if (e.form.valid) {
				toast.success(e.form.message.message, { duration: 3000 });
				goto(`/projects/${e.form.message.id}`);
			}
		}
	});
	const { form: formData, enhance } = form;
	const uploadedFiles = filesProxy(formData, 'files');
	async function handleChange(e: Event) {
		const toastId = toast.loading('Processing files...');
		const target = e.target as HTMLInputElement;
		if (!target.files) return;
		const currentFiles = Array.from(target.files);
		const gitignoreFile = currentFiles.find(
			(file) => file.name === '.gitignore' || file.webkitRelativePath?.endsWith('/.gitignore')
		);
		$formData.files = currentFiles.map((file) => {
			if (file.size === 0) {
				const dummyContent = new Blob(['// dummy\n'], { type: file.type || 'text/plain' });
				const dummyFile = new File([dummyContent], file.name, {
					type: file.type || 'text/plain',
					lastModified: file.lastModified
				});
				return dummyFile;
			} else {
				return file;
			}
		});
		if (!gitignoreFile) {
			toast.warning(
				'Warning: No .gitignore file found in the uploaded files. All files will be uploaded.',
				{ duration: 3000 }
			);
			toast.success('Files processed successfully', { id: toastId, duration: 5000 });
			return;
		}

		const ignoredPatterns = await parseFile(gitignoreFile);
		$formData.files = filterIgnoredFiles($formData.files, ignoredPatterns);
		toast.success('Files processed successfully', { id: toastId });
	}
	const file = fileProxy(form, 'image');
</script>

<form method="POST" use:enhance class="pl-6 pr-40" enctype="multipart/form-data">
	<Form.Field {form} name="files">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Project Upload</Form.Label>
				<Input
					{...props}
					type="file"
					multiple
					webkitdirectory
					bind:files={$uploadedFiles}
					onchange={handleChange}
				/>
			{/snippet}
		</Form.Control>
		<Form.Description>
			Upload your complete project. Folder and files listed in
			<code class="bg-gray-800 p-1 rounded-sm text-white/80"> .gitignore </code> will be automatically
			excluded.
		</Form.Description>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="projectName">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Project Name</Form.Label>
				<Input {...props} bind:value={$formData.projectName} />
			{/snippet}
		</Form.Control>
		<Form.Description>Give your project a name.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="image">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Project Picture</Form.Label>
				<Input {...props} bind:files={$file} type="file" accept="image/*" />
			{/snippet}
		</Form.Control>
		<Form.Description>Demo Picture of project.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="description">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Project Description</Form.Label>
				<Input {...props} bind:value={$formData.description} />
			{/snippet}
		</Form.Control>
		<Form.Description>Describe your project.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="contributors">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Project Contributors</Form.Label>
				<Input {...props} bind:value={$formData.contributors} />
			{/snippet}
		</Form.Control>
		<Form.Description>List contributors separated by commas.</Form.Description>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button class="mt-1">Submit</Form.Button>
</form>
