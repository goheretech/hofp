<script>
  import {Link} from 'svero';  
  import {loggedIn$, firestore } from "../../firebase";
  let user = loggedIn$;
  
  let pConfirm = {
    'medical': '',
    'criminal': '',
    'confirmedBackground': 'true'
  }
  
  function update(){

    //Find user in database
    let users = firestore.collection('users').where('pos', '==', $user.uid).get() .then(snapshot => {
      snapshot.forEach(doc => {
        
        firestore.collection('users').doc(doc.id).set({pConfirm}, {merge: true}).then(()=>{
          console.log('Done');
        });
        
        
        
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
    
    // firestore.collection('users/' + $user.uid).set({
    //   pConfirm
    // });
    console.log(`User: ${$user.uid}`);
    console.log('pConfirm:', pConfirm);
    
  } 
</script>

<div class="jumbotron mt-3 bg-white">
  <h1 class="display-4">Employee Registration</h1>
  <p class="lead">Page 3 of 3</p>
  <hr class="my-4" />
  <form>
    
    <div class="row mt-3">
      <div class="col-6">
        <input type="text"  bind:value={pConfirm.medical} class="form-control" placeholder="Please list any medical concerns" />
      </div>
      <div class="col-6">
        <input type="text"  bind:value={pConfirm.criminal} class="form-control" placeholder="Please list any criminal convinctions" />
      </div>
    </div>
    <hr class="my-4" />
    <div class="row">
        <div class="col">
            <p>By submitting this application I hereby certify that the above statements are true and correct to the best of my
knowledge. <br> I understand that this information will be used to perform a background check including but not limited to: DHHS, ICHAT and Local Police Clearances  and any false statements may disqualify me from employement with House of Providence. </p>
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
