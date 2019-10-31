<script>
  import {Link} from 'svero';  
  import {loggedIn$, firestore } from "../../firebase";
  let user = loggedIn$;
  
  let emerg = {
    'name': '',
    'phone': ''
  }
  let references = [
      {
        'name': '',
        'phone': '',
        'rel': ''
      },
      {
        'name': '',
        'phone': '',
        'rel': ''
      },
      {
        'name': '',
        'phone': '',
        'rel': ''
      },
    ]
  
  function update(){

    //Find user in database
    let users = firestore.collection('users').where('pos', '==', $user.uid).get() .then(snapshot => {
      snapshot.forEach(doc => {
        
        firestore.collection('users').doc(doc.id).set({references, emerg}, {merge: true}).then(()=>{
          console.log('Done');
          window.location.href = '/onboard3';
        });
        
        
        
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
    // firestore.collection('users/' + $user.uid).set({
    //   references
    // });
    console.log(`User: ${$user.uid}`);
    console.log('references:', references);
    
  } 
</script>

<div class="jumbotron mt-3 bg-white">
  <h1 class="display-4">Employee Registration</h1>
  <p class="lead">Page 2 of 3</p>
  <hr class="my-4" />
  <form>
    
    <div class="row">
      <div class="col mb-4">
        <h3>Emergency Contact</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="text"  bind:value={emerg.name} class="form-control" placeholder="Name" />
      </div>
      <div class="col">
        <input type="text"  bind:value={emerg.phone} class="form-control" placeholder="Phone Number" />
      </div>
    </div>
    <hr class="my-4" />
    <div class="row">
      <div class="col mb-4">
        <h3>References</h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="text"  bind:value={references[0].name} class="form-control" placeholder="Name" />
      </div>
      <div class="col">
        <input
          type="text"
          bind:value={references[0].phone}
          class="form-control"
          placeholder="Phone" />
      </div>
      <div class="col">
        <input type="text" class="form-control" bind:value={references[0].rel} placeholder="Relationship" />
        <small id="emailHelp" class="form-text text-muted">
          Cannot be a relative
        </small>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <input type="text"  bind:value={references[1].name} class="form-control" placeholder="Name" />
      </div>
      <div class="col">
        <input
          type="text"
          bind:value={references[1].phone}
          class="form-control"
          placeholder="Phone" />
      </div>
      <div class="col">
        <input type="text" class="form-control" bind:value={references[1].rel} placeholder="Relationship" />
        <small id="emailHelp" class="form-text text-muted">
          Cannot be a relative
        </small>
      </div>
    </div>
    
    <div class="row mt-3">
      <div class="col">
        <input type="text"  bind:value={references[2].name} class="form-control" placeholder="Name" />
      </div>
      <div class="col">
        <input
          type="text"
          bind:value={references[2].phone}
          class="form-control"
          placeholder="Phone" />
      </div>
      <div class="col">
        <input type="text" class="form-control" bind:value={references[2].rel} placeholder="Relationship" />
        <small id="emailHelp" class="form-text text-muted">
          Cannot be a relative
        </small>
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
