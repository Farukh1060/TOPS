#include<stdio.h>
int main(){
	int i,n,j;
	int k=1;
	printf("enter no:");
	scanf("%d",&n);
	for(i=0;i<n;i++){
		for(j=0;j<i;j++){
			printf(" %d",k++); 

		}
		printf("\n");
	}
}
