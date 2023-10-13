import requests
import os

# Define the API endpoint
url = 'http://localhost:5000/api/admin/blog_posts'  # Replace with the actual URL

# Define the form data for the request
data = {
    'title': 'Test Blog Post',
    'description': 'This is a test blog post.',
    'is_public': 'true'
}

# Define the files to upload
files = {
    'thumbnail': ('naman.jpg', open('naman.jpg', 'rb'), 'image/jpeg'),
    'image1': ('naman.jpg', open('naman.jpg', 'rb'), 'image/jpeg')
}

# Send the POST request with form data and files
response = requests.post(url, data=data, files=files)

# Print the response from the server
print("Response Status Code:", response.status_code)
print("Response Content:", response.json())

# Check if the request was successful (HTTP status code 201 indicates success)
print(response.json())
