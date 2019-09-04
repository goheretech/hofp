<script>
  let name = "Jack LeMay";
  let points = 100;

  //SideMenu
  
</script>

<style>

</style>

<nav class="navbar navbar-expand-lg navbar-dark bg-purple fixed-top">
  <button class="navbar-toggler sideMenuToggler" type="button">
    <span class="navbar-toggler-icon" />
  </button>
  <a class="navbar-brand" href="#">The House of Providence</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">

        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          {name}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider" />
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>

  </div>
</nav>
<div class="wrapper d-flex ">
  <div class="sideMenu bg-purpleLight">
    <div class="sidebar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="material-icons icon">dashboard</i>
            <span class="text">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="material-icons icon">accessibility_new</i>
            <span class="text">Human Resources</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="material-icons icon">attach_money</i>
            <span class="text">Finance</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="material-icons icon">school</i>
            <span class="text">Training</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="material-icons icon">settings</i>
            <span class="text">Settings</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link sideMenuToggler">
            <i class="material-icons icon">view_list</i>
            <span class="text">Expand</span>
          </a>
        </li>

      </ul>
    </div>
  </div>
  <div class="content">
    <main>
      <div class="container-fluid p-3">
        <div class="row px-3">
          <div class="col-12">
            <!-- Route Start -->
				<div class="bg-white row p-4">
					<div class="col-12">
						<h4 class="mb-2">
							Dashboard
						</h4>
					</div>					
				</div>				
			<!-- End of Routes -->
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
