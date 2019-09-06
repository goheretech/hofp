<script>
  import { Router, Route } from "svero";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  //HR
  import HR from "./pages/HumanResources.svelte";

    //Onboarding
    import Register from "./pages/hr/Register.svelte";
    import Onboard1 from "./pages/hr/Onboard1.svelte"
    import Onboard2 from "./pages/hr/Onboard2.svelte"

  //FInance
  import Finances from "./pages/Finances.svelte";
  import Profile from "./pages/Profile.svelte";
  import Settings from "./pages/Settings.svelte";
  import { loggedIn$, employees } from "./firebase";
  import { mult } from "./CheckRegistration";

  let reg;
  const user = loggedIn$;

  $: if ($user) {
    checkReg($user.uid);
  }

  $: console.log(`Registered: ${reg}`);

  function checkReg(uid) {
    employees.forEach(emp => {
      emp.forEach(e => {
        if (e.pos == uid) {
          reg = true;
          console.log(reg);
        } else {
          reg = false;
          console.log(reg);
        }
      });
    });
  }
</script>

<Header {user} />
<div class="wrapper d-flex ">
  <Sidebar />
  <div class="content">
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Route Start -->
            <Router>
              {#if reg != true}                  
                  <Route path="*" {user} component={Register} />                 
                  <Route path="/onboard1" component={Onboard1} {user} />
                  <Route path="/onboard2" component={Onboard2} {user} />
              {:else}
                  
                    <Route path="*" {user} component={Dashboard} />                 
                    <Route path="/hr" component={HR} {user} />
                    <Route path="/finances" {user} component={Finances} />
                    <Route path="/profile" {user} component={Profile} />
                    <Route path="/settings" {user} component={Settings} />
              {/if}
              
              
            </Router>
            <!-- End of Routes -->
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
