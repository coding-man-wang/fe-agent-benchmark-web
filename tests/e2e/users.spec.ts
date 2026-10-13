import { expect, test } from '@playwright/test'

test('user list can be searched', async ({ page }) => {
  await page.goto('/users')
  await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible()
  await page.getByLabel('Search users').fill('User 2')
  await expect(page.getByText('user2@example.com')).toBeVisible()
})
