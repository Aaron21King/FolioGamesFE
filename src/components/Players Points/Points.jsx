import DataFetching from "./DataFetching";

function Points(params) {
  

  return (
    <div className="bg-image">
      <img src="images/logo.png" class="img-fluid" alt="..."></img>
      <DataFetching />
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1 </th>
            <td>Mark</td>
            <td>21</td>
            <td>
              <button type="button" class="btn btn-primary">
                +3
              </button>
              <button type="button" class="btn btn-primary">
                +5
              </button>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}

export default Points;
