 let items = [{
    "id": 1,
    "checked": false,
    "item": "Almonds, Unsalted, in the blue bag"
  },
  {
    "id": 2,
    "checked": false,
    "item": "Pizza"
  },
  {
    "id": 3,
    "checked": false,
    "item": "Bread"
  }]

  export const createItem = (req, res) => {
    let {checked, item} = req.body;
    const id = items[items.length-1].id + 1;
    const newItem = {
        id,
        checked,
        item
    }
    items.push(newItem);
    res.send(`the item: ${item.item} was added to the db with the id ${id}`);
  }

  export const getItems = (req, res) => {
    res.send(items);
  }

  export const getItem = (req, res) => {
    const {id} = req.params;
    const item = items.find((item) => item.id == id);
    res.send(item);
  }

  export const deleteItem = (req,res) => {
    const {id} = req.params;
    items = items.filter((item) => item.id !== id);
    res.send(`the item with id: ${id} was deleted from the db`);
  }

  export const updateItem = (req,res) => {  
    const {id} = req.params;
    const {checked, item} = req.body;
    const itemToUpdate = items.find((item) => item.id == id);
    if (checked) itemToUpdate.checked = checked;
    if (item) itemToUpdate.item = item;
    res.send(`the item  ${itemToUpdate.item} was updated`);
  }