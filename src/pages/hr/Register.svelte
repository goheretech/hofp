<script>
  import { loggedIn$, logIn, firestore } from "../../firebase";
  import { Link } from "svero";

  let user = loggedIn$;
  let userInfo = {name: '', email: ''};
  $: if ($user) {
    userInfo = {
      name: $user.displayName,
      email: $user.email,
      pos: $user.uid
    };
  }

  $: console.log(userInfo);
  const addUser = async () => {
    try {
      await firestore
        .collection("users")
        .add({ ...userInfo, regDate: new Date(), stage: 1 });
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="jumbotron mt-3 bg-white">
  <h1 class="display-4">
    Welcome to the
    <strong>House of Providence</strong>
  </h1>
  <h2 class="display-4">Employee Registration</h2>
  {#if $user}
    <p class="lead">Let's get started!</p>
    <hr class="my-4" />
    <form>
      <div class="form-group">
        <label for="InputName">Name:</label>
        <input
          type="text"
          bind:value={userInfo.name}
          class="form-control"
          id="InputName"
          aria-describedby="emailHelp"
          placeholder="Your full legal name" />

      </div>
      <div class="form-group">
        <label for="InputEmail">Email address</label>
        <input
          type="email"
          class="form-control"
          bind:value={userInfo.email}
          id="InputEmail"
          aria-describedby="emailHelp"
          placeholder="Contact email" />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          I consent to background checks
        </label>
      </div>
    </form>
    <button class="btn bg-pink text-white btn-lg" on:click={addUser}>
      Lets Go
    </button>
  {:else}
    <p class="lead">
      Please login to Google to begin your registration process!
    </p>
    <hr class="my-4" />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum odio neque
      officiis perspiciatis, magni voluptates doloremque architecto quia,
      veritatis earum suscipit iste. Ipsum esse animi earum, voluptatibus quia
      iste rem accusamus deleniti dolorem dicta cum.
    </p>
    <button
      class="btn btn-lg bg-pink text-white"
      on:click={logIn}
      role="button">
      Log In
    </button>
  {/if}

</div>
