<script>
    import {Link} from 'svero'
</script>

<div class="sideMenu bg-pink">
		<div class="sidebar">
		<ul class="navbar-nav">
			<li class="nav-item">
			<Link href="/dash" className="nav-link">
				<i class="material-icons icon">dashboard</i>
				<span class="text">Dashboard</span>
			</Link>
			</li>
			<li class="nav-item">
			<Link href="/hr" className="nav-link">
				<i class="material-icons icon">accessibility_new</i>
				<span class="text">Human Resources</span>
			</Link>
			</li>
			<li class="nav-item">
			<Link href="/finances" className="nav-link">
				<i class="material-icons icon">attach_money</i>
				<span class="text">Finance</span>
			</Link>
			</li>
			<li class="nav-item">
			<Link href="javascript:void(0)" className="nav-link">
				<i class="material-icons icon">school</i>
				<span class="text">Training</span>
			</Link>
			</li>
			<li class="nav-item">
			<Link href="/settings" className="nav-link">
				<i class="material-icons icon">settings</i>
				<span class="text">Settings</span>
			</Link>
			</li>
			<li class="nav-item">
			<a href="javascript:void(0)" class="nav-link sideMenuToggler">
				<i class="material-icons icon">view_list</i>
				<span class="text">Expand</span>
			</a>
			</li>

		</ul>
		</div>
	</div>