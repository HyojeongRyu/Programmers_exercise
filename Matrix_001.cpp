#include<stdio.h>

int main(void) {

	int x;
	int n;
	scanf("%d %d", &x, &n);

	int arr[1000] = {0};
	int num = 0;

	for (int i = 1; i <= n; i++)
	{
		num = i * x;
		arr[i - 1] = num;
	}

	printf("[");
	for (int j = 0; j < n; j++)
	{
		if (n - 1 == j)
		{
			printf("%d", arr[j]);
		}
		else 
		{
			printf("%d,", arr[j]);
		}
	}
	printf("]");
	return 0;
}