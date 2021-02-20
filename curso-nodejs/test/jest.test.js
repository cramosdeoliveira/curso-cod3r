test('Devo conhecer as principais assertivas do JEST', () => {
  let number = 10
  expect(number).not.toBeNull()
  expect(number).toBe(10)
  expect(number).toBeGreaterThan(9)
  expect(number).toBeLessThan(11)
})

test('Devo saber trabalhar com objetos', () => {
  const obj = {
    name: 'Jhon',
    email: 'jhon@email.com'
}
  expect(obj).toHaveProperty('name')
})