import axios from "axios";
import { addNewGroupActionCreater, deleteGroupActionCreater, getGroupsActionCreater } from "../redux/reducers/dictionaries-reducer";


export const getGroups = () => {
  return (dispatch) => {
    axios.get("/getGroups").then((response) => {
      dispatch(getGroupsActionCreater(response.data.values));
    });
  };
};

export const addNewGroup = (group_name) => {
  return (dispatch) => {
    axios.post("/AddNewGroup", {group_name}).then((response) => {
      dispatch(addNewGroupActionCreater());
    });
  };
};

export const deleteGroup = (group_id) => {
  return (dispatch) => {
    axios.delete("/deleteGroup", { data: { group_id } }).then((response) => {
      dispatch(deleteGroupActionCreater());
    });
  };
};