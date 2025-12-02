
# insanely sleep depreived rn L mfoa

#input = '''11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124'''

file = open("02-2025.txt", "r")
input = file.read();





idRanges = input.split(',');

invalidIds = [];

for r in idRanges:
    extremes = r.split('-');
    idRange = list(
                range(
                    int(extremes[0]),
                    int(extremes[1])+1
                    )
                );
    
    for i in idRange:
        #check each id for the requirements
        i = str(i);
        idLength = len(i);
        idLengthHalf = int(idLength/2)
        
        #pattern
        #not optimized, it 100% wastes time on things that will never work
        for x in range(1,idLength):
            if idLength/x % 1 == 0:
                hits = i.count(i[:x]);
                if hits >= idLength/x:
                    invalidIds.append(int(i));
                    break;
        

        #leading zero
        if i[0] == 0:
            invalidIds.append(int(i));
        
        #doubled
        '''if i[:idLengthHalf] == i[idLengthHalf:]:
            #print(i);
            invalidIds.append(int(i));'''
        
        
print(sum(invalidIds));
    
file.close();