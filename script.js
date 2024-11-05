document.getElementById('showForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    // Get show names from input fields
    const show1 = document.getElementById('show1').value.trim();
    const show2 = document.getElementById('show2').value.trim();
    
    if (!show1 || !show2) {
        document.getElementById('results').innerText = "Please enter two show names.";
        return;
    }

    try {
        // Fetch actors for both shows
        const actors1 = await fetchActors(show1);
        const actors2 = await fetchActors(show2);
        
        // Find common actors
        const commonActors = actors1.filter(actor => actors2.includes(actor));
        
        // Display results
        displayResults(commonActors);
    } catch (error) {
        console.error("Error fetching actors:", error);
        document.getElementById('results').innerText = "Failed to fetch actor data. Please try again.";
    }
});

// Mock function to simulate fetching actors by show name
async function fetchActors(show) {
    // Here, integrate an actual API to fetch actors based on the show name.
    // Replace this with an API call, e.g., to IMDb or TVMaze
    return []; // Return a dummy empty array for now
}

function displayResults(actors) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = actors.length ? actors.join(', ') : 'No common actors found.';
}
