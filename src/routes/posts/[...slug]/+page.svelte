<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const post = $derived(data.post);
</script>

<h1>{post.title}</h1>
