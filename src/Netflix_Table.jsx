import Sdata from "./Sdata";

const NetfTable = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold"> NETFLIX</span> Series
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>id</th>
                <th>title</th>
                <th>sname</th>
                <th>link</th>
              </tr>
            </thead>
            <tbody>
              {Sdata.map((curEle, ind) => {
                return (
                  <tr>
                    <th>{Sdata[ind].id}</th>
                    <td>{Sdata[ind].title}</td>
                    <td>{Sdata[ind].sname}</td>
                    <td>{Sdata[ind].link}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NetfTable;
