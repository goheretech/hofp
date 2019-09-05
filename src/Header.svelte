<script>
	import {Link} from 'svero'
	import { db, auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';

	let user;
	

	//Login Google
	function login() {
		auth.signInWithPopup(googleProvider);
		console.log('Logging in:{user}');
		
    }
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
				href="/dash"
				id="navbarDropdown"
				role="button"
				
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Sign In
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				<a class="dropdown-item" href="/profile">Profile</a>
				<button class="dropdown-item" on:click={login} >Login</button>
				<div class="dropdown-divider" />
				<a class="dropdown-item" href="/signout">Log Out</a>
				</div>
			</li>
		</ul>
	</div>
</nav>