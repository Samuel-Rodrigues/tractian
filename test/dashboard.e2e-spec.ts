import { test, expect } from "@playwright/test";

test("Should fetch the material", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("textbox", { name: "Buscar..." }).fill("material");

  await expect(page.getByText("material")).toBeVisible();
});

test("Should fetch the client's Location 1033 from Apex", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Apex" }).click();

  await page.waitForTimeout(2000);

  await page.getByRole("textbox", { name: "Buscar..." }).fill("Location 1033");

  await expect(page.getByText("Location 1033")).toBeVisible();
});

test("should navigate through sidebar tree and display component details", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "networkidle" });

  // Click on "Machinery house" in the tree
  const machineryHouse = await page.getByText("Machinery house");
  await machineryHouse.click();

  // Wait for and click on "Motors H12D"
  const motorsH12D = await page.getByText("Motors H12D");
  await motorsH12D.click();

  // Wait for and click on "Motor H12D- Stage 1"
  const motorStage1 = await page.getByText("Motor H12D- Stage 1");
  await motorStage1.click();

  const alertText = await page.getByText("Alerta");
  const vibrationText = await page.getByText("Vibração");

  await expect(alertText).toBeVisible();
  await expect(vibrationText).toBeVisible();
});
