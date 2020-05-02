function generateMarkdown(data) {
    return `
  # Manager Name
  # ${data.managerName}

  # ID
  ${data.managerID}
  
  # Office
  ${data.managerOffice}
  `;
  }
  
  module.exports = generateMarkdown;
  