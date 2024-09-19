document.addEventListener('DOMContentLoaded', function() {
  const data = [
      { id: 1, name: 'Example Name 1', value: 123 },
      { id: 2, name: 'Example Name 2', value: 456 },
      { id: 3, name: 'Example Name 3', value: 789 }
  ];

  const tableBody = document.querySelector('#data-table tbody');

  data.forEach(item => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.value}</td>
      `;
      
      tableBody.appendChild(row);
  });
});
