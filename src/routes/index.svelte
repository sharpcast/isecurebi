<script context="module">
	export async function load({ session }) {
        // Get the authenticated user from the current session
          let { user } = session
        // redirect the user to home page incase the user is not authenticated
          if (user == null) {
              return {
                  status: 302,
                  redirect: "/dashboard",
              }
          }
    }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
