
<script>
    import {logIn, logOut} from '../firebase'
    export let user;
    
</script>

<div class="jumbotron mt-3 bg-white">
    {#if $user}
        <h1 class="display-4">Welcome, {$user.displayName}... to Jurassic Park!</h1>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam accusantium inventore ipsam nobis neque!</p>
        <hr class="my-4">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum odio neque officiis perspiciatis, magni voluptates doloremque architecto quia, veritatis earum suscipit iste. Ipsum esse animi earum, voluptatibus quia iste rem accusamus deleniti dolorem dicta cum.</p>
    {:else}
        <h1 class="display-4">Welcome! Please Login</h1>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam accusantium inventore ipsam nobis neque!</p>
        <hr class="my-4">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum odio neque officiis perspiciatis, magni voluptates doloremque architecto quia, veritatis earum suscipit iste. Ipsum esse animi earum, voluptatibus quia iste rem accusamus deleniti dolorem dicta cum.</p>
        <button class="btn btn-primary btn-lg" on:click={logIn} role="button">Log In</button>
    {/if}
  
  
  
</div>