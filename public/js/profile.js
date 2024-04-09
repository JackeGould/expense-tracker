//  expense
const addExpenseForm = async (event) => {
    event.preventDefault();

    //collect values from the expense form
    // const expenseName = document.querySelector('#expense-name').value;
    const expenseAmount = document.querySelector('#expense-amount').value;

    const expenseDescription = document.querySelector('#expense-description').value;

    if (expenseName && expenseAmount && expenseDescription) {
        const response = await fetch(`/expenses/add`, {
            method: 'POST',
            body: JSON.stringify({ expenseAmount, expenseAmount, expenseDescription }),

    // const expenseCaterogy = document.querySelector('#expense-category').value;
    const expenseDescription = document.querySelector('#expense-description').value;

    if (expenseAmount &&  expenseDescription) {
        const response = await fetch(`/api/expenses`, {
            method: 'POST',
            body: JSON.stringify({
              amount: expenseAmount,
              description: expenseDescription
             }),

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

// delete btn

const delButtonExpense = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/expenses/add/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete exoense');
    }
  }
};

// edit

const editButtonExpense = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/expenses/add/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete expense');
    }
  }
};

// add income

const addIncomeForm = async (event) => {
  event.preventDefault();

  //collect values from the income form
  const incomeName = document.querySelector('#income-name').value;
  const incomeAmount = document.querySelector('#income-amount').value;
  const incomeDescription = document.querySelector('#income-description').value;

  if (incomeName && incomeAmount && incomeDescription) {
      const response = await fetch(`/incomes/add`, {
          method: 'POST',
          body: JSON.stringify({ incomeAmount, incomeAmount, incomeDescription }),
          headers: {
              'Content-Type': 'application/json',
          },
      });
      if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to add income');
        }
  }
}

// delete btn

const delButtonIncome = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/incomes/add/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete income');
    }
  }
};

// edit

const editButtonIncome = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/incomes/add/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to edit income');
    }
  }
};

  
  // income form

    document
    .querySelector('#new-income-form')
    .addEventListener('submit', addIncomeForm);

    document
    .querySelector('#income-delete')
    .addEventListener('click', delButtonIncome);

    document
    .querySelector('#income-edit')
    .addEventListener('click', editButtonIncome);

    // expense form

    document
    .querySelector('#new-expense-form')
    .addEventListener('submit', addExpenseForm);


    document
    .querySelector('#expense-delete')
    .addEventListener('click', delButtonExpense);

    document
    .querySelector('#expense-edit')
    .addEventListener('click', editButtonExpense);

    // document
    // .querySelector('#expense-delete')
    // .addEventListener('click', delButtonHandler);

