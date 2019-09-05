<script>
    import {collectionData, firestore, sendEmail} from "../firebase.js"
    import { startWith } from "rxjs/operators";
    const employeeRef = firestore.collection('users');
    const departmentRef = firestore.collection('dept');

    export let user;

    const employees = collectionData(employeeRef.orderBy('lName', 'desc')).pipe(startWith([]));
    const departments = collectionData(departmentRef.orderBy('name', 'desc')).pipe(startWith([]));
    

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
    <div class="col-2 pr-2">
        <div class="card">
            <div class="card-header bg-blueLight text-white ">                
                    <h5 class="py-2 m-0">Onboarding</h5>
            </div>
            <div class="card-body p-0 list-group">
                <button href="javascript:void(0)" data-toggle="modal" data-target="#invite" class="list-group-item list-group-item-action">New Employee</button>
                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Current Prospects</a>
            </div>
        </div>        
    </div>
    <div class="col pl-2">     

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All Employees</a>
                </li>
            {#each $departments as dept (dept.id)}
                <li class="nav-item">
                    <a class="nav-link" id="{dept.id}-tab" data-toggle="tab" href="#{dept.id}" role="tab" aria-controls="{dept.id}" aria-selected="true">{dept.name}</a>
                </li>
            {/each} 
            </ul>
            <div class="tab-content bg-white" id="myTabContent">
            <div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
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
                            {#each $employees as emp}
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{emp.fName} {emp.lName}</td>
                                        <td>test@email.com</td>
                                        <td>{emp.dept}</td>
                                    </tr>
                            {/each}                        
                        </tbody>
                    </table>            
                </div>
                {#each $departments as dept}
                <div class="tab-pane fade" id="{dept.id}" role="tabpanel" aria-labelledby="{dept.id}-tab">
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
                            {#each $employees as emp}
                                {#if emp.dept == dept.name}
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{emp.fName} {emp.lName}</td>
                                        <td>test@email.com</td>
                                        <td>{dept.name}</td>
                                    </tr>
                                {/if}
                            {/each}                        
                        </tbody>
                    </table>            
                </div>
                {/each}
                
            </div>
            
    </div>
</div>

<!-- Invite Modal -->
<div class="modal fade" id="invite" tabindex="-1" role="dialog" aria-labelledby="inviteModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="inviteModalLabel">Send Invitation</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form action="/send-email" method="post">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="name" class="form-control" id="name" placeholder="">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button class="btn btn-primary" on:click={() => sendEmail()} >Send Invitation</button>
      </div>
    </div>
  </div>
</div>