function Points(params) {
  return (
    <div className="bg-image">
      <img src="images/logo.png" class="img-fluid" alt="..."></img>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
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
