import { Styles } from 'react-jss';

export default {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '600px',
    margin: '1% auto',
    padding: '20px',
  },
  p: {
    color: 'white',
    fontSize: '24px',
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    marginTop: '20px',
    fontSize: '24px',
  },
} as Styles;
