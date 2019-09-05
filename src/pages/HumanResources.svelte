<script>
    import {db} from "../firebase.js"

    let employees=[];
    let departments = [];

    db.collection("users").orderBy("pos", "asc").onSnapshot(snapData => {
			employees = snapData.docs;            
			console.log(employees[0].data())
    });
    
    db.collection("dept").onSnapshot(snapData => {
        departments = snapData.docs;
        console.log(departments[0].data())
	});

	
    

</script>




<div class="row pt-4 mx-2 mb-1">
    <div class="col">
        <div class="card">
            <div class="card-body">
                <h3>Human Resources</h3>                
            </div>
        </div>        
    </div>
</div>
<div class="row pt-3 mx-2 ">
    <div class="col-4 pr-2">
        <div class="card">
            <div class="card-header bg-blueLight text-white ">                
                    <h5 class="py-2 m-0">Onboarding</h5>
            </div>
            <div class="card-body p-0 list-group">
                <a href="#" class="list-group-item list-group-item-action">Prospects</a>
                <a href="#" class="list-group-item list-group-item-action">New Employee</a>
                <a href="#" class="list-group-item list-group-item-action">New Employee</a>
                <a href="#" class="list-group-item list-group-item-action">New Employee</a>
            </div>
        </div>        
    </div>
    <div class="col pl-2">
        

            <ul class="nav nav-tabs" id="myTab" role="tablist">
            {#each departments as dept}
                <li class="nav-item">
                    <a class="nav-link" id="{dept.data().name}-tab" data-toggle="tab" href="#{dept.data().name}" role="tab" aria-controls="{dept.data().name}" aria-selected="true">{dept.data().name}</a>
                </li>
            {/each}
            </ul>
            <div class="tab-content bg-white" id="myTabContent">
                <div class="tab-pane fade show active" id="Human Resources" role="tabpanel" aria-labelledby="Human Resources-tab">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Department</th>
                            </tr>
                        </thead>
                        <tbody>

                        {#each employees as emp}
                            <tr>
                                <th scope="row">1</th>
                                <td>{emp.data().fName} {emp.data().lName}</td>
                                <td>test@email.com</td>
                                <td>{emp.data().dept}</td>
                            </tr>
                        {/each}
                        
                        </tbody>
                    </table>            
                </div>
                <div class="tab-pane fade" id="Finance" role="tabpanel" aria-labelledby="Finance-tab">...</div>
                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
            </div>
                
                  
                  
    </div>
</div>



<!-- <div class="bg-white row p-4 pl-2 my-4 mx-1">
    <div class="col-12 p-0">
        <h4 class="mb-2">Human Resources</h4>
    </div>
</div>
<div class="row">
    <div class="col-4">
        <div class="bg-white p-4">
            <h1>Yeah</h1>
        </div>
    </div>
    <div class="bg-white col-8 p-4">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Department</th>
                </tr>
            </thead>
            <tbody>

            {#each employees as emp}
                <tr>
                    <th scope="row">1</th>
                    <td>{emp.data().fName} {emp.data().lName}</td>
                    <td>test@email.com</td>
                    <td>{emp.data().dept}</td>
                </tr>
            {/each}
            
            </tbody>
        </table>
    </div>    
</div> -->