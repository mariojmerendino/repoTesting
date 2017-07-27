#include <iostream>
#include <map>
#include <unordered_set>
using namespace std;

//Given an array of integers and a target number
//determine if an arithmetic expression using these 2 of these integers 
//can be evaluated to the target number, you are allowed to use '+', '-', '*', '/'.
//Follow-up: when evaluating the expression, take operand precedence into account, 
bool getTarget(int nums[], int length, int target){ 
	bool ans = false;
	//unordered_set<int> set;
	for(int i = 0; i < length; i++){
		for(int x =0; x < length; x++){
			cout << nums[x] << " " << nums[i] <<endl;
			if(nums[x]-nums[i] == target){
				return true;
			}
			if(nums[x]+nums[i] == target){
				return true;
			}
			if(nums[x]*nums[i] == target){
				return true;
			}
			if(nums[x]/nums[i] == target){
				return true;
			}
		}
	}
	return ans;
}

int main(){
	int arr[5] = {5,6,21,4,7};
	if(getTarget(arr, 5, 81)){
		cout << "Correct" << endl;
	}
	else{
		cout << "False" << endl; 
	}
}