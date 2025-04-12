<script lang="ts">
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import JSZip from 'jszip';
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
	const file = fileProxy(form, 'image');
	async function handleZipUpload(e: Event) {
		const toastId = toast.loading('Processing zip file...');
		const input = e.target as HTMLInputElement;
		if (!input.files || input.files.length === 0) return;

		const zipFile = input.files[0];
		if (!zipFile.name.endsWith('.zip')) {
			toast.error('Please upload a valid .zip file');
			return;
		}

		try {
			const zip = await JSZip.loadAsync(zipFile);
			const allFiles = Object.values(zip.files);
			const fileList: File[] = [];

			let ignoredPatterns: string[] = [];

			const gitignoreEntry = allFiles.find((f) => f.name.endsWith('.gitignore'));
			if (gitignoreEntry) {
				const text = await gitignoreEntry.async('text');
				const gitignoreBlob = new File([text], '.gitignore');
				ignoredPatterns = await parseFile(gitignoreBlob);
			} else {
				toast.warning('No .gitignore found in zip. Uploading all files.');
			}

			for (const entry of allFiles) {
				if (entry.dir) continue;

				const tempFile = new File([], entry.name);
				if (
					ignoredPatterns.length > 0 &&
					filterIgnoredFiles([tempFile], ignoredPatterns).length === 0
				) {
					continue;
				}
				const blob = await entry.async('blob');
				let newFile = new File([blob], entry.name);
				if (newFile.size === 0) {
					const dummyContent = new Blob(['// dummy\n'], { type: newFile.type || 'text/plain' });
					const dummyFile = new File([dummyContent], newFile.name, {
						type: newFile.type || 'text/plain',
						lastModified: newFile.lastModified
					});
					newFile = dummyFile;
				}
				fileList.push(newFile);
			}

			if (fileList.length === 0) {
				toast.error('No valid files found after filtering.');
				return;
			}

			$formData.files = fileList;
			toast.success('Zip processed successfully!', { id: toastId });
		} catch (err) {
			toast.error('Error reading zip file');
			console.error(err);
		}
	}
</script>

<form method="POST" use:enhance class="pl-6 pr-40 overflow-auto" enctype="multipart/form-data">
	<Form.Field {form} name="files">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Project Upload</Form.Label>
				<Input
					{...props}
					type="file"
					accept=".zip"
					onchange={handleZipUpload}
					bind:files={$uploadedFiles}
				/>
			{/snippet}
		</Form.Control>
		<Form.Description>
			Please upload a zip file of your project. Folder and files listed in
			<code class="bg-gray-800 p-1 rounded-sm text-white/80"> .gitignore </code> file inside zip file
			will be automatically excluded.
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
