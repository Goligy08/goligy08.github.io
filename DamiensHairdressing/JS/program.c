Char delimiter[] = “ “;

Void parseString(char*str, int startPosition, int endPosition)
{
   Char stringBuffer[1024];

If((endPosition – startPosition) > 1024)
   exit(-1)
strcpy(stringBuffer,str);
char*ptr = strtok(stringBuffer, delimiter);

while(ptr != NULL)
{
             Printf(“%s”\n”, ptr);
            Ptr = strtok(NULL,delimiter);
    }
}

Int main(int argc, char*args[] )  {
// args[1] input string
//args[2] length of input string

parseStrings(args[1],0, {int) args[2]};

  return EXIT_SUCCESS;

}
