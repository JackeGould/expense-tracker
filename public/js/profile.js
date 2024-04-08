const addExpenseForm = async (event) => {
    event.preventDefault();

    //collect values from the expense form
    const expenseName = document.querySelector('#expense-name').value;
    const expenseAmount = document.querySelector('#expense-amount').value;
    const expenseCaterogy = document.querySelector('#expense-category').value;
    const expenseDescription = document.querySelector('#expense-description').value;

    if (expenseName && expenseAmount && expenseCaterogy && expenseDescription) {
        const response = await fetch(`/expenses/add`, {
            method: 'POST',
            body: JSON.stringify({ expenseAmount, expenseAmount, expenseCaterogy, expenseDescription }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/profile');
          } else {
            alert('Failed to add expense');
          }
    }
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/expenses/add/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

  
  document
    .querySelector('#new-expense-form')
    .addEventListener('submit', addExpenseForm);

    document
    .querySelector('#expense-delete')
    .addEventListener('click', delButtonHandler);