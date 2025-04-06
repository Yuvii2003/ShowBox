/*
	Installed from github/ieedan/shadcn-svelte-extras
*/

// Follows the best practices established in https://shiki.matsu.io/guide/best-performance
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import { createHighlighterCore } from 'shiki/core';

const bundledLanguages = {
	bash: () => import('@shikijs/langs/bash'),
	diff: () => import('@shikijs/langs/diff'),
	js: () => import('@shikijs/langs/js'),
	json: () => import('@shikijs/langs/json'),
	jsx: () => import('@shikijs/langs/jsx'),
	tsx: () => import('@shikijs/langs/tsx'),
	svelte: () => import('@shikijs/langs/svelte'),
	ts: () => import('@shikijs/langs/ts'),
	cpp: () => import('@shikijs/langs/cpp'),
	c: () => import('@shikijs/langs/c'),
	java: () => import('@shikijs/langs/java'),
	sql: () => import('@shikijs/langs/sql'),
	py: () => import('@shikijs/langs/python'),
	php: () => import('@shikijs/langs/php'),
	rs: () => import('@shikijs/langs/rust'),
	css: () => import('@shikijs/langs/css'),
	html: () => import('@shikijs/langs/html'),
	go: () => import('@shikijs/langs/go'),
	kt: () => import('@shikijs/langs/kotlin'),
	markdown: () => import('@shikijs/langs/markdown'),
	csv: () => import('@shikijs/langs/csv'),
	dockerfile: () => import('@shikijs/langs/dockerfile'),
	docker: () => import('@shikijs/langs/docker'),
	mdx: () => import('@shikijs/langs/mdx'),
	md: () => import('@shikijs/langs/md'),
	log: () => import('@shikijs/langs/log')
};

export const bundledLanguagesKeys = Object.keys(bundledLanguages) as Array<
	keyof typeof bundledLanguages
>;

/** The languages configured for the highlighter */
export type SupportedLanguage = keyof typeof bundledLanguages;

/** A preloaded highlighter instance. */
export const highlighter = createHighlighterCore({
	themes: [
		import('@shikijs/themes/github-light-default'),
		import('@shikijs/themes/github-dark-default')
	],
	langs: Object.entries(bundledLanguages).map(([_, lang]) => lang),
	engine: createJavaScriptRegexEngine()
});
