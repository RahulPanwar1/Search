function search() {
    const searchInput = document.getElementById('searchInput').value;
  
    if (searchInput.trim() === '') {
      alert('Please enter a search query.');
      return;
    }
  
    const apiKey = 'YOUR_API_KEY';
    const cx = 'YOUR_CSE_ID';
    const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${searchInput}&key=${apiKey}&cx=${cx}`;
  
    $.ajax({
      url: apiUrl,
      dataType: 'json',
      success: function (data) {
        displayResults(data.items);
      },
      error: function (error) {
        console.error('Error fetching search results:', error);
      }
    });
  }
  
  function displayResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';
  
    if (!results || results.length === 0) {
      searchResultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
  
    results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
  
      const resultTitle = document.createElement('div');
      resultTitle.classList.add('result-title');
      resultTitle.innerText = result.title;
  
      const resultUrl = document.createElement('a');
      resultUrl.classList.add('result-url');
      resultUrl.href = result.link;
      resultUrl.innerText = result.link;
  
      resultItem.appendChild(resultTitle);
      resultItem.appendChild(resultUrl);
  
      searchResultsContainer.appendChild(resultItem);
    });
  }
  