import requests

# Define the base URL of your Flask application
base_url = "http://localhost:5000/api/admin/project"  # Replace with your actual URL

# Define the data for the request
data = {
    'name': 'Sample Project',
    'partner': 'Sample Partner',
    'brief': 'This is a sample project.',
    'pdf_link': 'https://example.com/sample.pdf',
    'date': '2023-10-11',
    'instagram_link': 'https://www.instagram.com/sample',
    'linkedin_link': 'https://www.linkedin.com/in/sample'
}

# Define the path to the sample image file
image_path = 'naman.jpg'  # Replace with the path to your sample image file

# Create a POST request with the image file
files = {'photo': open(image_path, 'rb')}

# Send the POST request to your Flask route
response = requests.post(base_url, data=data, files=files)

print(response.json())
