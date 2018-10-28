#include <iostream>
using namespace std;

class printData
{
public:
  void print(int i)
  {
    cout << "Printing int: " << i << endl;
  }

  void print(double d)
  {
    cout << "Printing double: " << d << endl;
  }

  void print(char* c)
  {
    cout << "Printing int: " << c << endl;
  }
};

int main()
{
  printData pd;

  // Call print to print integer
  pd.print(5);
  // Call print to print float
  pd.print(500.263);
  // Call print to print character
  pd.print("Character");

  return 0;
}
