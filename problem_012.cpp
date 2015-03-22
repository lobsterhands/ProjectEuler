// Author:                      Lyle Denman
// Assignment:                  ProjectEuler 012
// Date:                    	3/22/2015

/* 	The sequence of triangle numbers is generated by adding the natural numbers. 
	So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

	1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

	Let us list the factors of the first seven triangle numbers:

 	1: 1
 	3: 1,3
 	6: 1,2,3,6
	10: 1,2,5,10
	15: 1,3,5,15
	21: 1,3,7,21
	28: 1,2,4,7,14,28
	We can see that 28 is the first triangle number to have over five divisors.

	What is the value of the first triangle number to have over five hundred divisors? */
	
/* 
	1. Calculate Triangle Number
	2. Create Primes vector populated with the basic Triangle Number primes
	3. Test if 2 raised to the power of the vector length is greater than 500
	(before that, no testing needs to be done)
		3a. Cycle thru the Primes vector
		3b. Populate Primes Repeating vector with any numbers that repeat (if Primes has two 3's,
			Primes Repeating should have two 3's as well)
		3c. Find the number (X) of multiples created by all combinations of the numbers in Primes Repeating
		3d. Take the length of Primes and the length of Primes Repeating
		3e. Find the difference between those two lengths
		3f. For each integer difference, X *= 2;
		3g. If X > 500, break;
	
*/
	
#include <iostream>
#include <vector>
#include <math.h>
/***************
*     MAIN     *
***************/

int main()
{
	int currentTriangleNumber,
		triangleNumberInUse;
	
	int minMultiples = 500;
	int repeatingCount;
		
	std::vector <int> primes;
	std::vector <int> primesRepeating;	
	
	// Using integer i to loop and find the Triangle Number
	for (int i = 0; ; i++)
	{
		// Begin with empty vectors
		primes.clear();
		primesRepeating.clear();
		repeatingCount = 0;
		
		// Calculate Triangle Number
		currentTriangleNumber = (i * (i + 1) / 2);
		triangleNumberInUse = currentTriangleNumber;	
		
		// Find all base primes (including repeats) and push them to primes vector		
		for (int j = 2; j <= triangleNumberInUse; /* dynamic */)
		{
			if (triangleNumberInUse % j == 0)
			{				
				primes.push_back(j);			// Num can be pushed multiple
				triangleNumberInUse /= j;	
			}
			else 
			{
				j += 1;
			}
		}
		
		// If the minimum number of multiples is even possible:
		if (pow(2, primes.size()) >= minMultiples)
		{
			for (unsigned int j = 0; j < primes.size(); j++)
			{
				if (primes[j] == primes[j+1])
				{
					repeatingCount += 1;
				}
				else
				{
					if (repeatingCount > 0)
					{
						for (int i = 0; i < repeatingCount+1; i++)
						{
							primesRepeating.push_back(primes[j]);
						}
					}
					repeatingCount = 0;
				}	
			}
			
			int primesRepeatGCM = 1;
			// Find the greatest common multiple of the primes array
			for (int i = 0; i < primesRepeating.size(); i++)
			{
				primesRepeatGCM *= primesRepeating[i];
			}
			
			int numberOfPrimesRepeating = primesRepeating.size();
			int numberOfPrimes = primes.size();
			int sizeDifference = numberOfPrimes - numberOfPrimesRepeating;
			int sumOfMultiples = 0;
		
			for (int j = 1; j <= primesRepeatGCM; j++)
			{
				if (primesRepeatGCM % j == 0)
				{
					sumOfMultiples += 1;
				}
			}
			
			for (int i = 0; i < sizeDifference; i++)
			{
				sumOfMultiples *= 2;
			}
		
			if (sumOfMultiples > minMultiples)
			{
				std::cout << "Current triangle number: " << currentTriangleNumber << std::endl;
				std::cout << "Number of multiples: " << sumOfMultiples;
				break;
			}
			
		}
	}
	return 0;
} // end of main
