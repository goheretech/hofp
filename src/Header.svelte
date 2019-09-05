<script>
	import {Link} from 'svero'
	import firebase, {app, loggedIn$, logIn, logOut } from './firebase'

	let user = loggedIn$;
	
	

</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-pinkDark fixed-top">
	<button class="navbar-toggler sideMenuToggler" type="button">
		<span class="navbar-toggler-icon" />
	</button>
	<Link className="navbar-brand" href="/dash">The House of Providence</Link>
	<button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarSupportedContent"
		aria-controls="navbarSupportedContent"
		aria-expanded="false"
		aria-label="Toggle navigation">
		<span class="navbar-toggler-icon" />
	</button>
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item dropdown">

				<a
				class="nav-link dropdown-toggle"
				href="javascript:void(0)"
				id="navbarDropdown"
				role="button"
				
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				
				{#if $user}
					Welcome, {$user.displayName}
				{:else}
					Sign In
				{/if}
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				
				{#if $user}
					<a class="dropdown-item" href="/profile">Profile</a>
					<div class="dropdown-divider" />
					<button class="dropdown-item" on:click={logOut} >Log Out</button>
				{:else}
					<button class="dropdown-item" on:click={logIn} >Login with Google</button>
				{/if}			
				
				</div>
			</li>
		</ul>
	</div>
</nav>