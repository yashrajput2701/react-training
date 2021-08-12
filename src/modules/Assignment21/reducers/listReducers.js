import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 10;

const initialState = [
  {
    title: "TODO",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Migrate Java code to Kotlin"
      },
      {
        id: `card-${1}`,
        text: "Refactor contracts"
      }
    ]
  },
  {
    title: "DOING",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "GYM"
      },
      {
        id: `card-${3}`,
        text: "BREAKFAST"
      }
    ]
  },
  {
    title: "DONE",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${4}`,
        text: "GET READY"
      },
      {
        id: `card-${5}`,
        text: "OFFICE TIME"
      },
      {
        id: `card-${6}`,
        text: "MEAL 2"
      }
    ]
  },
  {
    title: "REJECTED",
    id: `list-${3}`,
    cards: [
      {
        id: `card-${7}`,
        text: "LUNCH TIME"
      },
      {
        id: `card-${8}`,
        text: "TAKE MULTI VIT"
      },
      {
        id: `card-${9}`,
        text: "MEAL 4"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.text, 
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text, 
        id: `card-${cardID}`
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case CONSTANTS.DELETE_CARD: {
      return state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: list.cards.filter(({ id }) => id !== action.payload.cardId)
          };
        }

        return list;
      });
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;
      const newState = [...state];
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
        
        const listStart = state.find(list => droppableIdStart === list.id);
        
        const card = listStart.cards.splice(droppableIndexStart, 1);
        
        const listEnd = state.find(list => droppableIdEnd === list.id);

     
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listReducer;
