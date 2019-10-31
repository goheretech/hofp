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
        .add({ ...userInfo, regDate: new Date() });
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div class="jumbotron mt-3 bg-white">
  <h1 class="display-4">
    Thank you for applying at
    <strong>House of Providence</strong>
  </h1>
  <p>Your information will be review and a member of HR will reach out to you soon.</p>

</div>
