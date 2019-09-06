<script>import {Link} from 'svero'</script>

<div class="jumbotron mt-3 bg-white">
  <h1 class="display-4">Employee Registration</h1>
  <p class="lead">Page 2 of 3</p>
  <hr class="my-4" />
  <form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Phone Number" />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Social Security #" />
        <small id="emailHelp" class="form-text text-muted">
          Required for background check.
        </small>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Aliases" />
        <small id="emailHelp" class="form-text text-muted">
          Required for background check.
        </small>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Race" />
        <small id="emailHelp" class="form-text text-muted">
          Required for background check.
        </small>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-7">
        <input type="text" class="form-control" placeholder="Address" />
        <small id="emailHelp" class="form-text text-muted">
          Include apartment or suite number.
        </small>
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="City" />
      </div>
      <div class="col-2">
        <input type="text" class="form-control" placeholder="State" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="form-group">

          <textarea
            placeholder="Why do you want to work for The House of Providence?"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3" />
        </div>
      </div>
      <div class="col">
        <div class="form-group">

          <textarea
            placeholder="Who is your daddy and what does he do?"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3" />
        </div>
      </div>
    </div>
  </form>
  <Link className="btn bg-pink text-white btn-lg" href="/onboard/2">Lets Go</Link>
</div>
