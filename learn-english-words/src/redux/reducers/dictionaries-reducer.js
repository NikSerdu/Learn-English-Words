const getGroups = "GET_GROUPS";
const addNewGroup = "ADD_NEW_GROUP";
const deleteGroup = "DELETE_GROUP";

const initialState = {
  groups: [],
  isChange: true
};

export const dictionariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case getGroups:
      return {
        ...state,
        groups: action.payload,
        isChange: false
      };
    case addNewGroup:
      return {
        ...state,
        isChange: true
      }
    case deleteGroup:
      return {
        ...state,
        isChange: true
      }
    default:
      return state;
  }
};

export const getGroupsActionCreater = (groups) => {
  return {
    type: getGroups,
    payload: groups,
  };
};

export const addNewGroupActionCreater = () => {
  return {
    type: addNewGroup
  };
};

export const deleteGroupActionCreater = () => {
  return {
    type: deleteGroup
  };
};