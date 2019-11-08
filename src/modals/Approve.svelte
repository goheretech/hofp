<script>
    export let employee;
    export let iE;
</script>

{#each employee as e, i}
    {#if e.stage == 2 && i==iE}
        Name: {e.name}<br>
        Alias: {e.pInfo.alias}<br>
        Email: {e.email}<br>
        Phone: {e.pInfo.phone}<br>
        Address: {e.pInfo.address} {e.pInfo.city}, {e.pInfo.state}<br>
        <hr>
        <h4>References</h4>
        Name: {e.references[0].name}<br>
        Phone: {e.references[0].phone}<br>
        Relationship: {e.references[0].rel}<br>
        <h6>---</h6>
        Name: {e.references[1].name}<br>
        Phone: {e.references[1].phone}<br>
        Relationship: {e.references[1].rel}<br>
        <h6>---</h6>
        Name: {e.references[2].name}<br>
        Phone: {e.references[2].phone}<br>
        Relationship: {e.references[2].rel}<br>
        <hr>
        <h4>Criminal Record</h4>
        <p>{e.pConfirm.criminal}</p>
        <hr>
        <h4>Medical Record</h4>
        <p>{e.pConfirm.medical}</p>
    
    {/if}
{/each}