import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Initialize Chrome
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("http://localhost:3000")  # your local dev server URL

wait = WebDriverWait(driver, 10)

# ✅ Verify main title is visible
title = wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "[data-testid='app-title']")))
assert "IT Ticketing System" in title.text
print("✅ App title loaded correctly")

# ✅ Verify dropdowns exist and interact with them
status_filter = driver.find_element(By.CSS_SELECTOR, "[data-testid='ticket-option']")
priority_filter = driver.find_element(By.CSS_SELECTOR, "[data-testid='ticket-high']")

status_filter.click()
priority_filter.click()
print("✅ Dropdown elements located and clickable")

# ✅ Verify search input is present
search_input = driver.find_element(By.CSS_SELECTOR, "input[placeholder='Search tickets...']")
search_input.send_keys("Network issue")
print("✅ Search input interaction successful")

# Wait for form to load
wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "[data-testid='ticket-title']")))
print("✅ Ticket form loaded")

# Fill out the form
driver.find_element(By.CSS_SELECTOR, "input[placeholder='Title']").send_keys("Printer not working")
driver.find_element(By.CSS_SELECTOR, "textarea[placeholder='Description']").send_keys("Printer in Room 302 is showing a paper jam error.")

# Change status and priority
driver.find_element(By.XPATH, "//select[1]").click()
driver.find_element(By.XPATH, "//option[@value='In Progress']").click()

driver.find_element(By.XPATH, "//select[2]").click()
driver.find_element(By.XPATH, "//option[@value='High']").click()

# Submit form
driver.find_element(By.XPATH, "//button[text()='Add Ticket']").click()
print("✅ Ticket form submitted")

# Wait for UI update (React render)
time.sleep(2)

# ✅ Verify ticket added to the list
""""
try:
    ticket = wait.until(
        EC.presence_of_element_located((By.XPATH, "//div[contains(., 'Printer not working')]"))
    )
    print("✅ Ticket created and displayed:", ticket.text)
except:
    print("❌ Ticket not found in list — check TicketList rendering")

"""

driver.quit()
