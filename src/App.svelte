<script>
  import { Router, Route } from "svero";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import HR from "./pages/HumanResources.svelte";
  import Finances from "./pages/Finances.svelte";
  import Profile from "./pages/Profile.svelte";
  import Settings from "./pages/Settings.svelte";
  import {loggedIn$} from './firebase';
  import {checkReg} from './CheckRegistration';

  const user = loggedIn$;
  let reg = true;
    $: if ($user)  { reg = checkReg($user.uid);}
    $: console.log(reg);
  
</script>

<Header user={user}/>
<div class="wrapper d-flex ">
  <Sidebar />
  <div class="content">
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Route Start -->
            <Router>
              <Route path="*" user={user} component={Dashboard} />
              {#if $user != null}
              <Route path="/hr" component={HR}  user={user}/>
              <Route path="/finances" user={user} component={Finances} />
              <Route path="/profile" user={user} component={Profile} />
              <Route path="/settings" user={user} component={Settings} />
              {/if}
            </Router>
            <!-- End of Routes -->
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
