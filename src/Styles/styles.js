export const styles = {
  container: { 
    height: 350,
    width: 350,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
    top: 60,
    background: 'lavender',
    borderRadius: 10
  },

  input: { 
    border: 'none',
    outline: 'none',
    backgroundColor: 'ghostwhite',
    marginBottom: 10,
    padding: 5,
    fontSize: 18,
    fontFamily: 'Founders Grotesk',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 7
  },

  button: { 
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    border: 'none',
    fontSize: 18,
    padding: '12px 0px',
    fontFamily: 'Founders Grotesk',
    borderRadius: 10,
    cursor: 'pointer',
    marginBottom: 10
  },

  delete: {
    backgroundColor: 'red',
    color: 'white',
    outline: 'none',
    border: 'none',
    fontSize: 18,
    padding: '5px',
    fontFamily: 'Founders Grotesk',
    borderRadius: 10,
    cursor: 'pointer',
    width: '60px',
    height: 'auto',
    margin: '0 auto'
  },

  date: { 
    fontFamily: 'Founders Grotesk' 
  },
}

export const navbar = {
  backgroundColor: '#fff',
  color: '#000', 
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',
}

export const todo = { 
  name: { 
    fontSize: 20, 
    fontWeight: 'bold' 
  },

  description: { 
    marginBottom: 5 
  },

  status: { 
    fontSize: 14,
    height: 'auto',
    padding: 5,
    backgroundColor: 'ghostwhite',
    color: 'dodgerblue',
    marginRight: 5,
    borderRadius: 5
  }, 

  updateButton: {
    fontSize: 14,
    height: 'auto',
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'ghostwhite',
    color: 'dodgerblue',
    marginTop: 10
  }
}

export const banner = {
  height: 'auto',
  width: 'auto',
  background: '#74C9FF',
  color: '#000',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  padding: 5,
  top: 100,
  position: 'relative',
  letterSpacing: '-.4px',
  borderRadius: 5
}

export const create = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}

export const sort = {
  ul: { 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0px' 
  },

  li: { 
    margin: '5px',
    height: 'auto',
    padding: 5,
    background: '#DED9FB',
    color: '#000',
    cursor: 'pointer',
    borderRadius: 5
  }
}

export const todoList = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },  

  list: {
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export const empty = {
  display: 'none',
}