<script>
  import {Link} from 'svero';
  import {loggedIn$, firestore } from "../../firebase";
  let user = loggedIn$;
  
  let pInfo = {
    'phone': '',
    'ss': '',
    'alias': '',
    'race': '',
    'address': '',
    'city': '',
    'state': '',
    'q1': '',
    'q2': '',
  }

  function update(){

    //Find user in database
    let users = firestore.collection('users').where('pos', '==', $user.uid).get() .then(snapshot => {
      snapshot.forEach(doc => {
        
        firestore.collection('users').doc(doc.id).set({pInfo}, {merge: true}).then(()=>{
          window.location.href = '/onboard2';
          console.log('Cool beans');
          
        });
        
        
        
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
    // firestore.collection('users/' + $user.uid).set({
    //   pInfo
    // });
    console.log(`User: ${$user.uid}`);
    console.log('pInfo:', pInfo);
    
  } 


</script>

<div class="jumbotron mt-3 bg-white">
  <h1 class="display-4">Employee Registration</h1>
  <p class="lead">Page 1 of 3</p>
  <hr class="my-4" />
  <form>
    <div class="row">
      <div class="col">
        <input bind:value={pInfo.phone} type="text" class="form-control" placeholder="Phone Number" />
      </div>
      <div class="col">
        <input
          bind:value={pInfo.ss} type="text"
          class="form-control"
          placeholder="Social Security #" />
        <small id="emailHelp" class="form-text text-muted">
          Required for background check.
        </small>
      </div>
      <div class="col">
        <input bind:value={pInfo.alias} type="text" class="form-control" placeholder="Aliases" />
        <small id="emailHelp" class="form-text text-muted">
          Required for background check.
        </small>
      </div>
      <div class="col">
        <input bind:value={pInfo.race} type="text" class="form-control" placeholder="Race" />
        <small id="emailHelp" class="form-text text-muted">
          Required for background check.
        </small>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-7">
        <input bind:value={pInfo.address} type="text" class="form-control" placeholder="Address" />
        <small id="emailHelp" class="form-text text-muted">
          Include apartment or suite number.
        </small>
      </div>
      <div class="col">
        <input bind:value={pInfo.city} type="text" class="form-control" placeholder="City" />
      </div>
      <div class="col-2">
        <input bind:value={pInfo.state} type="text" class="form-control" placeholder="State" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="form-group">

          <textarea bind:value={pInfo.q1}
            placeholder="Why do you want to work for The House of Providence?"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">

          <textarea bind:value={pInfo.q2}
            placeholder="How did you learn about House of Providence?"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3" />
        </div>
      </div>
    </div>
  </form>
  <button
      class="btn btn-lg bg-pink text-white"
      on:click="{update}"
      role="button">
      Next Page
  </button>
</div>
