<script>
	import {Router, Route} from 'svero';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
	import Dashboard from './pages/Dashboard.svelte';
	import HR from './pages/HumanResources.svelte';
	import Finances from './pages/Finances.svelte';
	import Profile from './pages/Profile.svelte';
	import Settings from './pages/Settings.svelte';
	import { db, auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';
	

	//Login Google
	function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<Header/>
<div class="wrapper d-flex ">	
	<Sidebar />
	<div class="content">
		<main>
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
					<!-- Route Start -->
						<Router>
							<Route path="*" component={Dashboard} />
							<Route path="/hr" component={HR} />
							<Route path="/finances" component={Finances} />
							<Route path="/profile" component={Profile} />
							<Route path="/settings" component={Settings} />
						</Router>						
					<!-- End of Routes -->
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
