import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { newMembers } from "@/data/newMembers";
export default function NewMembers() {
  return (
      <Card>
          <CardHeader>
              <CardTitle className="text-center">New Join Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              { 
                  newMembers.map((member) => (
                      <div key={member.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                              <Avatar>
                                  <AvatarImage src={member.avatar} />
                                  <AvatarFallback>{ member.name.substring(0,2)}</AvatarFallback>
                              </Avatar>
                              <div>
                                  <p className="font-medium">{member.name}</p>
                                  <p className="text-sm  text-slate-500">{ member.title}</p>
                              </div>
                          </div>
                            <Button variant='outline' size='sm'>Display</Button>    
                    </div>
                ))}
          </CardContent>
        </Card>
  )
}
