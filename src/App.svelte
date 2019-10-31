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
    import Onboard3 from "./pages/hr/Onboard3.svelte"
    import Confirm from "./pages/hr/Confirm.svelte"

  //FInance
  import Finances from "./pages/Finances.svelte";
  import Profile from "./pages/Profile.svelte";
  import Settings from "./pages/Settings.svelte";
  import { loggedIn$, employees } from "./firebase";
  import { mult } from "./CheckRegistration";


  let stage = 0;
  let approv = false;
  let reg = false;
  let completed = false;
  const user = loggedIn$;

  $: if ($user) {
    checkReg($user.uid);
  }

  $: console.log(`Registered: ${reg} | Approved: ${approv}`);
  $: if (e.pConfirm.confirmedBackground == true) {
      console.log('Application Finished');
      
      stage = 3;
    }
  function checkReg(uid) {
    employees.forEach(emp => {
      emp.forEach(e => {
        
        if (e.approved == true && e.pos == uid) {
          stage = 3;
          approv = true;
          reg = true;
        }else if(e.pos == uid){
          stage = 2;

          
          reg = true;
          completed = e.pConfirm.confirmedBackground;
          console.log('Completed:', e.pConfirm.confirmedBackground);
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
              {#if stage == 0}
                Stage = {stage}
              {/if}
              {#if stage == 1}
                Stage = {stage}
              {/if}
              {#if stage == 2}
                Stage = {stage}
              {/if}
              {#if stage == 3}
                Stage = {stage}
              {/if}
              {#if stage == 4}
                Stage = {stage}
              {/if}

              {#if approv != true}                  
                  {#if reg != true}
                    <Register />
                  {:else}
                      {#if completed == true}
                        <Route path="*" component={Confirm}/>                        
                      {:else}
                        <Route path="*" {reg} component={Onboard1} />
                        <Route path="/onboard2" component={Onboard2} {user} />
                        <Route path="/onboard3" component={Onboard3} {user} />
                        <Route path="/confirm" component={Confirm} {user} />
                      {/if}
                    
                  {/if}
                  
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
