from django.test import TestCase

# Create your tests here.

def test_api_can_get_a_todo(self):
    todo = Todo.objects.get()
    response = self.client.get(
        reverse('details',
        kwargs={'pk': todo.id}), format="json"
    )
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    self.assertContains(response, todo)

def test_api_can_update_todo(self):
    change_todo = {'title':'Write tests'}
    response = self.client.put(
        reverse('details', kwargs={'pk': todo.id}), change_todo, format='json'
    )
    self.assertEqual(res.status_code, status.HTTP_200_OK)

def test_api_can_delete_todo(self):
    todo = Todo.objects.get()
     response = self.client.delete(
            reverse('details', kwargs={'pk': todo.id}),
            format='json',
            follow=True)

     self.assertEqual(res.status_code, status.HTTP_204_NO_CONTENT)