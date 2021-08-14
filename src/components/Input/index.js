import { Component } from "react";
import { Link } from "react-router-dom";

class Input extends Component {
  state = { columnName: "", option: "date", tableDetails: [] };

  selectOption = (e) => {
    this.setState({ option: e.target.value });
  };
  getInput = (e) => {
    this.setState({ columnName: e.target.value });
  };

  SubmitBtn = (event) => {
    event.preventDefault();
    const { columnName, option } = this.state;
    // this.setState((prevState) => ({
    //   tableDetails: { columnName, option }),
    // }));
    this.state.tableDetails.push({ columnName, option });
    this.setState(() => ({
      tableDetails: this.state.tableDetails,
    }));
  };

  tableCreation = (eachItem) => {
    return (
      <div>
        <label>{eachItem.columnName}</label>
        <input placeholder="Enter Value" type={eachItem.option} />
      </div>
    );
  };
  createFormTable = () => {
    const { tableDetails } = this.state;
    return (
      <form className="table-form">
        {tableDetails.map((eachItem) => this.tableCreation(eachItem))}
      </form>
    );
  };
  render() {
    const { tableDetails } = this.state;
    console.log(tableDetails);
    return (
      <>
        <div className="bg">
          <form className="form-container" onSubmit={this.SubmitBtn}>
            <label for="ColumnName">Column Type:</label>
            <input
              placeholder="Column name"
              id="ColumnName"
              onChange={(event) => this.getInput(event)}
            />
            <label for="type">Column Type:</label>

            <select id="type" onChange={(e) => this.selectOption(e)}>
              <option value="Date">Date</option>
              <option value="number">number</option>

              <option value="multiselect">multiselect</option>
            </select>
            <button>create</button>
          </form>
          <div className="table-form-container">{this.createFormTable()}</div>
        </div>
        <Link to="/table">
          <button>View Table</button>
        </Link>
      </>
    );
  }
}

export default Input;
