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

  console.log('THis is working');
  
  $: if ($user) {
    checkReg($user.uid);
  }

  $: console.log(`Registered: ${reg} | Approved: ${approv}`);
  
  function checkReg(uid) {
    employees.forEach(emp => {
      emp.forEach(e => {
        
        console.log(e.pos, uid);
        
         if(e.pos == uid){


           stage = e.stage;
            console.log('Stage: ',stage);
            
         
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
              
              
              {#if stage ==0}
                  <Register />
              {/if}
              {#if stage ==1}
                  <Route path="*" {reg} component={Onboard1} />
                  <Route path="/onboard2" component={Onboard2} {user} />
                  <Route path="/onboard3" component={Onboard3} {user} />
                  <Route path="/confirm" component={Confirm} {user} />
              {/if}
              {#if stage == 2}
                  <Route path="*" component={Confirm}/> 
              {/if}
              {#if stage ==3}
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
